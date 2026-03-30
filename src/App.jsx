import Section from "./components/Section";
import Profile from "@/assets/Profile.jpeg";

function App() {
  return (
    <>
      <Section id="home">
        <div className="flex flex-col gap-2 w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Hola!!👋
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Soy Leonardo Díaz
          </h2>
          <p className="capitalize text-lg md:text-xl lg:text-2xl font-bold bg-linear-to-r from-blue-900 via-blue-700 to-blue-300 dark:from-blue-700 dark:via-blue-500 dark:to-blue-300 bg-clip-text text-transparent bg-size-[200%_200%] animate-gradient transition-all duration-300 ease-in-out">
            Desarrollador de Software FullStack
          </p>
          <p className="text-base md:text-lg mb-5">
            Enfocado en crear soluciones eficientes, seguras y fáciles de
            mantener.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-7">
            <a href="" target="_blank">
              <svg className="w-10 h-10">
                <use href="/sprites.svg#icon-facebook" />
              </svg>
            </a>
            <a href="" target="_blank">
              <svg className="w-10 h-10">
                <use href="/sprites.svg#icon-x" />
              </svg>
            </a>
            <a href="" target="_blank">
              <svg className="w-10 h-10">
                <use href="/sprites.svg#icon-instagram" />
              </svg>
            </a>
            <a href="" target="_blank">
              <svg className="w-10 h-10">
                <use href="/sprites.svg#icon-linkedin" />
              </svg>
            </a>
            <a href="mailto:leonardodg2000@gmail.com" target="_blank">
              <svg className="w-10 h-10">
                <use href="/sprites.svg#icon-gmail" />
              </svg>
            </a>
          </div>
        </div>

        <svg className="order-first md:order-last w-40 md:w-60 lg:w-80 h-auto mt-10 md:mt-0 text-blue-700 dark:text-blue-500 rotate-10 animate-bounce transition-all duration-300 ease-in-out">
          <use href="/sprites.svg#code" />
        </svg>
      </Section>
      <Section id="about" reverseBG>
        <div className="flex flex-col gap-10 w-full md:w-1/2">
          <h1 className="capitalize text-4xl md:text-5xl lg:text-6xl font-bold">
            Sobre mí
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">
            Soy graduado de <strong>Ingeniería en Ciencias Informáticas</strong>
            y actualmente ejerciendo como
            <strong>Desarrollador de Software FullStack</strong>.
          </p>
          <p className="text-md md:text-xl lg:text-2xl">
            Soy un desarrollador <strong>altamente motivado</strong> y orientado
            a los detalles,
            <strong>comprometido</strong> con estar al tanto de las últimas
            tendencias y mejores prácticas de la industria. Busco constantemente
            nuevos desafíos y oportunidades para
            <strong>expandir mis habilidades</strong>.
          </p>
        </div>
        <div className="w-50 md:w-auto order-first md:order-last rounded-full overflow-hidden shadow-2xl">
          <img src={Profile} alt="Avatar" />
        </div>
      </Section>
      <Section id="stack">
        <h1>Stack</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
          excepturi explicabo quibusdam possimus, similique saepe doloremque
          nemo assumenda optio laborum, deserunt ullam consectetur facilis? Ut
          exercitationem voluptatum nam perferendis dolore?
        </p>
      </Section>
      <Section id="projects" reverseBG>
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure
          rerum qui corporis velit ratione dignissimos maxime, consectetur iste.
          Saepe ea, alias ex itaque sit tenetur mollitia vel debitis sunt!
        </p>
      </Section>
      <Section id="contact">
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          voluptate, iure voluptatibus sapiente molestiae voluptatum, placeat
          culpa iusto fugiat aperiam laboriosam nulla. Rem, commodi veritatis
          qui asperiores eos numquam maxime!
        </p>
      </Section>
    </>
  );
}

export default App;
