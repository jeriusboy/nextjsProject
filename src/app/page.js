import Image from "next/image";
import DefaultLayout from "@/layout/DefaulLayout";
import Component2 from "@/components/Home/Component2";
import Component1 from "@/components/Home/Component1";
import Component4 from "@/components/Home/Component4";

export default function Home() {
  return (
    <DefaultLayout>
        <Component2 />
        <Component1 />
        <Component4 />
    </DefaultLayout>
  );
}
