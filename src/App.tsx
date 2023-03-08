// const bg = `https://static.vecteezy.com/system/resources/previews/002/774/528/original/teamwork-illustration-concept-worker-helping-each-other-for-business-group-free-vector.jpg`;
const bg2 = `https://s3.amazonaws.com/designsai.prod.graphicmakercrm/illustrations/04.%20Helping%20Someone_1588933719.svg`;

function App() {
  return (
    <section className="min-h-screen relative bg-[#ffe1be] flex justify-between items-center flex-wrap gap-2" >

      <img className="object-cover w-full lg:w-1/2 h-full aspect-auto max-h-screen" src={bg2} alt="_image" />

      <article className="w-full lg:w-1/2 flex-grow flex flex-col gap-3 flex-wrap text-start justify-center" >
        <h1 className="z-50 text-5xl font-righteous text-gray-800">Looking for Help ? Here it is!</h1>
        <span className="text-3xl font-medium font-kanit" >We help you by providing the opportunity to learn & adapt from the most experienced professionals in various fields.</span>
      </article>

    </section>
  );
}

export default App;