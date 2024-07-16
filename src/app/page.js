import Image from "next/image";
import DefaultLayout from "@/layout/DefaulLayout";
import Component2 from "@/components/Home/Component2";
import Component1 from "@/components/Home/Component1";
import Component4 from "@/components/Home/Component4";
import Component3 from "@/components/Home/Component3";
import Component5 from "@/components/Home/Component5";
import Component6 from "@/components/Home/Component6";

export default function Home() {
  return (
    <DefaultLayout>
        <Component2 />
        <Component1 />
        <Component3 />
        <Component4 />
        <Component5 />
        <Component6 />
    </DefaultLayout>
  );
}
