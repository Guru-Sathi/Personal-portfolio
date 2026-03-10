
export interface ActivityDay {
  date: string;
  count: number;
}

interface GithubContributionDay {
  date: string;
  count: number;
  level: number;
}

const GITHUB_USERNAME = "Guru-Sathi";
const LEETCODE_USERNAME = "Guru-Sathi";

export async function fetchGithubActivity(): Promise<ActivityDay[]> {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      console.error("Failed to fetch GitHub activity:", response.statusText);
      return [];
    }

    const data = await response.json();

    // API returns object with "contributions" array like: { date: "2024-01-01", count: 5, level: 2 }
    if (!data.contributions) return [];

    // Filter to current year and map to our format
    const currentYear = new Date().getFullYear();
    const startOfYear = new Date(currentYear, 0, 1);

    return data.contributions
      .filter((day: GithubContributionDay) => new Date(day.date) >= startOfYear)
      .map((day: GithubContributionDay) => ({
        date: day.date,
        count: day.count,
      }));
  } catch (error) {
    console.error("Error fetching GitHub activity:", error);
    return [];
  }
}

export async function fetchLeetCodeActivity(): Promise<ActivityDay[]> {
  try {
    const currentYear = new Date().getFullYear();
    const prevYear = currentYear - 1;

    // Helper to fetch a specific year
    const fetchYear = async (year: number) => {
      try {
        const response = await fetch("https://leetcode.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Referer": "https://leetcode.com/",
          },
          body: JSON.stringify({
            query: `
              query userProfileCalendar($username: String!, $year: Int) {
                matchedUser(username: $username) {
                  userCalendar(year: $year) {
                    submissionCalendar
                  }
                }
              }
            `,
            variables: { username: LEETCODE_USERNAME, year },
          }),
          next: { revalidate: 3600 },
        });

        if (!response.ok) return {};
        const json = await response.json();
        const calStr = json?.data?.matchedUser?.userCalendar?.submissionCalendar;
        return calStr ? JSON.parse(calStr) : {};
      } catch (error) {
        console.error(`Error fetching LeetCode activity for year ${year}:`, error);
        return {};
      }
    };

    const submissionCalendar = await fetchYear(currentYear);
    const countMap = new Map<string, number>();

    // submissionCalendar keys are unix timestamps in seconds
    Object.keys(submissionCalendar).forEach((timestampStr) => {
      const timestamp = parseInt(timestampStr);
      const date = new Date(timestamp * 1000);
      const dateStr = date.toISOString().split("T")[0];
      countMap.set(dateStr, (countMap.get(dateStr) || 0) + submissionCalendar[timestampStr]);
    });

    // Generate dates for the current year (Jan 1 to Today)
    const days: ActivityDay[] = [];
    const startOfYear = new Date(currentYear, 0, 1);
    const today = new Date();

    // Calculate total days from Jan 1 to today
    const diffTime = Math.abs(today.getTime() - startOfYear.getTime());
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    for (let i = 0; i <= totalDays; i++) {
        const d = new Date(startOfYear);
        d.setDate(d.getDate() + i);
        if (d > today) break;

        const dateStr = d.toISOString().split("T")[0];
        days.push({
            date: dateStr,
            count: countMap.get(dateStr) || 0,
        });
    }

    return days;
  } catch (error) {
    console.error("Error fetching LeetCode activity:", error);
    return [];
  }
}
