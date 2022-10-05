export const getUserLanguageListQuery = (userId: string) => `
query {
  user(login: "${userId}") {
    repositories(first: 100) {
      nodes {
        languages(first: 100) {
          edges {
            size
            node {
              name
            }
          }
        }
      }
    }
  }
}
`;

export const getContributionsQuery = (userId: string) => `
  query {
    user(login: "${userId}") {
      contributionsCollection() {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
      }
    }
  }
`;
