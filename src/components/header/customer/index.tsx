"use client";
import React from "react";
import { useCustomerStore } from "@/store/customer.store";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import UserIcon from "../icons/user";
export default function Customer() {
  const { push } = useRouter();
  const { customer, isLoading, isFetching } = useCustomerStore();
  return (
    <>
      {isLoading || isFetching ? (
        <>
          <UserIcon className=" w-5 h-5 xs:w-7 xs:h-7 text-muted-foreground"></UserIcon>
        </>
      ) : (
        <>
          <UserIcon
            className=" w-5 h-5 xs:w-7 xs:h-7"
            onClick={() => {
              if (!customer) {
                push("/auth/login");
              } else {
                //
              }
            }}
          ></UserIcon>
        </>
      )}
    </>
  );
}
