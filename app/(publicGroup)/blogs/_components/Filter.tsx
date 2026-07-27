// "use client";

// /* Blog Filter */

// import { useRouter, useSearchParams } from "next/navigation";

// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";

// const Filter = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const updateFilter = (key: string, value: boolean) => {
//     const params = new URLSearchParams(searchParams.toString());

//     if (value) {
//       params.set(key, "true");
//     } else {
//       params.delete(key);
//     }

//     params.delete("page");

//     router.push(`/blogs?${params.toString()}`);
//   };

//   return (
//     <div className="mb-8 flex flex-wrap gap-6">
//       <div className="flex items-center gap-2">
//         <Switch
//           checked={searchParams.get("isFeatured") === "true"}
//           onCheckedChange={(checked) => updateFilter("isFeatured", checked)}
//         />

//         <Label>Featured</Label>
//       </div>
//     </div>
//   );
// };

// export default Filter;
