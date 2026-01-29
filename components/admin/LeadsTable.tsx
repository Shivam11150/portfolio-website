import type { Lead } from "@/types/lead";
import LeadRow from "./LeadRow";

export default function LeadsTable({ leads }: { leads: Lead[] }) {
  if (leads.length === 0) {
    return <p className="text-gray-500">No leads yet.</p>;
  }

  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-3 border">Name</th>
            <th className="text-left p-3 border">Email</th>
            <th className="text-left p-3 border">Message</th>
            <th className="text-left p-3 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <LeadRow key={lead._id} lead={lead} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
