import type { Lead } from "@/types/lead";

export default function LeadRow({ lead }: { lead: Lead }) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="p-3 border">{lead.name}</td>
      <td className="p-3 border">{lead.email}</td>
      <td className="p-3 border max-w-md truncate">
        {lead.message}
      </td>
      <td className="p-3 border text-sm text-gray-600">
        {new Date(lead.createdAt).toLocaleString()}
      </td>
    </tr>
  );
}
