
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

    // Filter to last 365 days and map to our format
    const today = new Date();
    const oneYearAgo = new Date(today);
    oneYearAgo.setDate(today.getDate() - 365);

    return data.contributions
      .filter((day: GithubContributionDay) => new Date(day.date) >= oneYearAgo)
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

    const [currentYearData, prevYearData] = await Promise.all([
      fetchYear(currentYear),
      fetchYear(prevYear),
    ]);

    const submissionCalendar = { ...prevYearData, ...currentYearData };
    const countMap = new Map<string, number>();

    // submissionCalendar keys are unix timestamps in seconds
    Object.keys(submissionCalendar).forEach((timestampStr) => {
      const timestamp = parseInt(timestampStr);
      const date = new Date(timestamp * 1000);
      const dateStr = date.toISOString().split("T")[0];
      countMap.set(dateStr, (countMap.get(dateStr) || 0) + submissionCalendar[timestampStr]);
    });

    // Generate dates for the last 365 days
    const days: ActivityDay[] = [];
    const today = new Date();

    for (let i = 364; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
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
