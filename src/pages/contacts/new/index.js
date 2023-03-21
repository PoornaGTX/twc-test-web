import AddNewContactForm from "@/components/AddNewContactForm/AddNewContactForm";
import ContactUsHeader from "@/components/ContactUsHeader/ContactUsHeader";
import LogoutButton from "@/components/LogoutButton/LogoutButton";
import Layout from "@/Layout/Layout";
import { useEffect } from "react";
import { useAppContext } from "../../../context/appContext";
import { useRouter } from "next/router";

const Index = () => {
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
        <div className="container flex flex-col mt-20">
          <ContactUsHeader />
          <AddNewContactForm />
          <LogoutButton />
        </div>
      </Layout>
    </div>
  );
};

export default Index;
