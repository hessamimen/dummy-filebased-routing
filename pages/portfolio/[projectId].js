import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();
  console.log("pathname", router.pathname);
  console.log("query", router.query.projectId);
  return <div>Portfolio Project Page</div>;
}
export default PortfolioProjectPage;
