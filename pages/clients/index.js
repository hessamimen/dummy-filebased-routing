import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "hessam", name: "Hessam" },
    { id: "max", name: "Maximilian" },
  ];
  return (
    <div>
      <h1>ClientsPage</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ClientsPage;
