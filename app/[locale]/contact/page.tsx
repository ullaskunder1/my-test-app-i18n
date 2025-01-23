import { Locale } from "@/i18n-config"
import en from "../../../locales/en/contact.json"
import jp from "../../../locales/jp/contact.json"
import Link from "next/link"
import LocaleSwit from "@/component/switch"
export default async function Contact(props: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await props.params

  console.log("locale", locale)
  const t = locale === "jp" ? jp : en

  return (
    <div>
      <h1>HOME {t.title}</h1>
      <Link href={"/"}>HOME page</Link>
      <span>-----</span>
      <LocaleSwit />
    </div>
  )
}
