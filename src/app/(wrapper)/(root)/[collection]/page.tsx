import { redirect } from "next/navigation";
import React from "react";

export default function page({ params }: { params: { collection: string } }) {
  redirect(`/${params.collection}/all`);
}
