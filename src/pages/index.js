import ContactUsHeader from "@/components/ContactUsHeader/ContactUsHeader";
import LogoutButton from "@/components/LogoutButton/LogoutButton";
import WelcomePageBody from "@/components/WelcomePageBody/WelcomePageBody";
import Layout from "@/Layout/Layout";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useRouter } from "next/router";
import ContactPage from "./contacts";

export default function Home() {
  const { user, contacts, getContacts } = useAppContext();
  const router = useRouter();

  console.log(contacts.length);

  useEffect(() => {
    getContacts();
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <div>
      {contacts.length > 0 ? (
        <ContactPage />
      ) : (
        <Layout>
          <div className="container flex flex-col">
            <ContactUsHeader />
            <WelcomePageBody />
            <LogoutButton />
          </div>
        </Layout>
      )}
    </div>
  );
}
