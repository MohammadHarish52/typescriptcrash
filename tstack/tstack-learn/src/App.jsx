import { useQuery } from "@tanstack/react-query";

const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

function App() {
  const postQuery = useQuery({
    queryKey: ["posts"], // unique key for this query
    queryFn: () => wait(1000).then(() => [...posts]),
  });

  if (postQuery.isLoading) return <h1>Loading....</h1>;

  return <h1>Tanstack query</h1>;
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
