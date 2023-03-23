import ContactsTable from "@/components/ContactsTable/ContactsTable";
import ContactUsHeader from "@/components/ContactUsHeader/ContactUsHeader";
import LogoutButton from "@/components/LogoutButton/LogoutButton";
import Layout from "@/Layout/Layout";
import React, { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { useRouter } from "next/router";

const index = () => {
  const { user } = useAppContext();

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <div>
      <Layout>
        <div className="container flex flex-col">
          <ContactUsHeader />

          <ContactsTable />

          <LogoutButton />
        </div>
      </Layout>
    </div>
  );
};

export default index;
