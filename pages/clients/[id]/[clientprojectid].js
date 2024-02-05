import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query.id);
  return <div>SelectedClientProjectPage</div>;
}
export default SelectedClientProjectPage;
