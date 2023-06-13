import Button from "@/app/components/button";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";

const MOCK_CONTACTS = [
  {
    url: "/",
    icon: <TbBrandGithub />,
  },
  {
    url: "/",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "/",
    icon: <TbBrandWhatsapp />,
  },
  {
    url: "/",
    icon: <TbBrandInstagram />,
  },
];
export default function HeroSection() {
  return (
    <>
      <section className="w-full lg:h-[755px]  bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
        <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
          <div className="w-full lg:max-w-[520px]">
            <p className="font-poppins text-red-700 font-medium">Meu nome é</p>
            <h2 className="text-3xl font-medium mt-2">Bryan da Luz</h2>
            <p className="text-zinc-400 my-6 text-sm sm:text-base">
              Sou um desenvolvedor em busca de oportunidades de estágio ou
              posição júnior em uma empresa que valorize a inovação e o trabalho
              em equipe. Estou aberto a adquirir mais experiência em áreas
              relacionadas a desenvolvimento de sistemas e tenho a determinação
              de contribuir significativamente para o sucesso da empresa. Com
              minha paixão pela tecnologia e habilidades técnicas em constante
              aprimoramento, acredito poder agregar valor ao time e ajudar a
              impulsionar projetos para alcançar resultados notáveis
            </p>
            <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
              <Button className="w-max hover:shadow-button cursor-pointer">
                {" "}
                Entre em contato
                <HiArrowNarrowRight size={18} />
              </Button>

              <div className="text-zinc-600 text-2xl flex items-center h-20 gap-3">
                {MOCK_CONTACTS.map((contact, index) => (
                  <a
                    href={contact.url}
                    key={`contact-${index}`}
                    target="_blank"
                    className="hover:text-zinc-100 transition-colors cursor-pointer"
                  >
                    {contact.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <Image
            width={420}
            height={404}
            src="/images/profile.png"
            alt="Foto de perfil"
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
          />
        </div>
      </section>
    </>
  );
}
