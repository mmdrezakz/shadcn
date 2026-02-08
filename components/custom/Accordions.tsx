
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const items = [
  {
    value: "item-1",
    trigger: "چگونه رمز عبور خود را بازنشانی کنم؟",
    content:
      "روی گزینه 'فراموشی رمز عبور' در صفحه ورود کلیک کنید، آدرس ایمیل خود را وارد کنید و ما یک لینک برای بازنشانی رمز عبور برای شما ارسال خواهیم کرد. این لینک پس از 24 ساعت منقضی می‌شود.",
  },
  {
    value: "item-2",
    trigger: "آیا می‌توانم طرح اشتراک خود را تغییر دهم؟",
    content:
      "بله، می‌توانید در هر زمان از تنظیمات حساب کاربری خود، طرح خود را ارتقا یا تنزل دهید. تغییرات در چرخه صورتحساب بعدی شما اعمال خواهد شد.",
  },
  {
    value: "item-3",
    trigger: "چه روش‌های پرداختی را می‌پذیرید؟",
    content:
      "ما تمام کارت‌های اعتباری اصلی، پی پال و حواله بانکی را می‌پذیریم. تمام پرداخت‌ها از طریق شرکای پرداخت ما به صورت امن پردازش می‌شوند.",
  },
  {
    value: "item-4",
    trigger: "آیا امکان استرداد وجه وجود دارد؟",
    content:
      "بله، در صورتی که در 30 روز اول از خرید خود راضی نباشید، می‌توانید درخواست استرداد کامل وجه را دهید. بعد از این دوره، استرداد به صورت متناسب محاسبه می‌شود.",
  },
  {
    value: "item-5",
    trigger: "چگونه با پشتیبانی تماس بگیرم؟",
    content:
      "می‌توانید از طریق چت آنلاین در پایین صفحه، تیکت پشتیبانی یا ایمیل با ما در ارتباط باشید. زمان پاسخگویی در ساعات کاری 9 صبح تا 6 عصر است.",
  },
]


export default function Accordions() {
  return (
      <>
          <Accordion type="single"   className="bg-card px-5 rounded-2xl ring-2 ring-button dark:ring-button w-80" >
            {items.map((item) =>(

        <AccordionItem  value={item.value} key={item.value}>
          <AccordionTrigger className="text-primary hover:cursor-pointer">{item.trigger}</AccordionTrigger>
          <AccordionContent className="text-primary hover:cursor-pointer">
            <p>
              {item.content}
            </p>
          </AccordionContent>
        </AccordionItem>
            ))}
      </Accordion>
      </>
  )
}
