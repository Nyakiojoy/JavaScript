const users = [
  {
    id: 1,
    name: "John",
    location: "New York",
    friends: [2, 3, 4],
    posts: [
      { content: "Great day at Central Park!", timestamp: "2024-09-10T12:00:00", likes: 15 },
      { content: "Loving the vibes in NYC!", timestamp: "2024-09-15T08:30:00", likes: 8 },
      { content: "Visited the Statue of Liberty today!", timestamp: "2024-09-05T17:45:00", likes: 20 }
    ]
  },
  {
    id: 2,
    name: "Alice",
    location: "San Francisco",
    friends: [1, 3],
    posts: [
      { content: "Hiking in the Bay Area!", timestamp: "2024-09-12T14:20:00", likes: 12 },
      { content: "Enjoying the sunny weather!", timestamp: "2024-09-14T11:10:00", likes: 6 }
    ]
  },
  {
    id: 3,
    name: "Emily",
    location: "Los Angeles",
    friends: [1, 2, 4],
    posts: [
      { content: "Beach day in LA!", timestamp: "2024-09-08T09:45:00", likes: 25 },
      { content: "Exploring Hollywood!", timestamp: "2024-09-16T16:55:00", likes: 5 }
    ]
  },
  {
    id: 4,
    name: "David",
    location: "Chicago",
    friends: [2],
    posts: [
      { content: "Deep dish pizza is the best!", timestamp: "2024-09-11T10:30:00", likes: 18 },
      { content: "Trying out a new jazz club tonight!", timestamp: "2024-09-13T20:00:00", likes: 3 }
    ]
  },
  {
    id: 5,
    name: "Sarah",
    location: "Seattle",
    friends: [3, 1],
    posts: [
      { content: "Coffee time in the Pacific Northwest!", timestamp: "2024-09-09T15:15:00", likes: 9 },
      { content: "Exploring the Olympic National Park!", timestamp: "2024-09-14T07:00:00", likes: 11 }
    ]
  }
];

// Current date
const currentDate = new Date();
// Function to check if the post was made in the last week
function isPostRecent(post) {
  const postDate = new Date(post.timestamp);
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(currentDate.getDate() - 7);
  return postDate >= oneWeekAgo;
}

// Solution using map, filter, and reduce
function analyzeActiveUsers(users) {
  // Step 1: Filter active users (posted at least once in the past week)
  const activeUsers = users.filter(user => 
      user.posts.some(post => isPostRecent(post))
  );

  // Step 2: Extract popular posts (those with more than 10 likes)
  const popularPosts = activeUsers.map(user => 
      user.posts.filter(post => post.likes >= 10 && isPostRecent(post))
  ).flat(); // Flatten to have a single array of posts

  // Step 3: Calculate the average number of likes per active user
  const totalLikes = popularPosts.reduce((sum, post) => sum + post.likes, 0);
  const averageLikesPerUser = activeUsers.length ? totalLikes / activeUsers.length : 0;

  return {
      activeUsers: activeUsers.length,
      totalPopularPosts: popularPosts.length,
      averageLikesPerUser: averageLikesPerUser
  };
}

// Example usage
const result = analyzeActiveUsers(users);
console.log(result);
