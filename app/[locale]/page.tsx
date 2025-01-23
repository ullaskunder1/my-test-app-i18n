import { Locale } from "@/i18n-config"
import en from "../../locales/en/home.json"
import jp from "../../locales/jp/home.json"
import Link from "next/link"
import LocaleSwit from "@/component/switch"
export default async function Home(props: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await props.params

  console.log("locale", locale)
  const t = locale === "jp" ? jp : en

  return (
    <div>
      <h1>HOME {t.test}</h1>
      <div>
        <Link href={"/contact"}>contact page</Link>
        <span>-----</span>
        <LocaleSwit />
      </div>
    </div>
  )
}
