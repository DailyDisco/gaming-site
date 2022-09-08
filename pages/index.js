import { Banner, Iframe } from '../components';
// import { makeId } from '../utils/makeId';

const Home = () => (
  <div className="flex justify-center sm:px-4 p-12">
    <div className="w-full minmd:w-4/5">
      <Banner
        // this next line allows us to make our banner customizable on the whole app
        name="Welcome to the Gaming Place"
        childStyles="md:text-4xl sm:text-2xl xs=text-xl text-left"
        parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
      />
      {/* this is the div for created nfts */}
      <div className="mt-10">
        <div className="flexBetween mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start">
          <h1 className="flex-1 font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-4">Recently Uploaded Games</h1>
          {/* here we will put the search bar */}
          {/* <div>SearchBar</div> */}

        </div>
        <p className="flex-1 mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start">Feel free to email us your games and we will do our best to feature them on our page!</p>
        {/* here we will put the filter */}
        <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center">
          {[1].map((i) => (
            <Iframe
              key={`gameCover-${i}`}
              gameCover={{
                i,
                // name: `Prompt ${i}`,
                // price: (10 - i * 0.535).toFixed(2),
                // seller: `0x${makeId(3)}...${makeId(4)}`,
                // owner: `0x${makeId(3)}...${makeId(4)}`,
                description: 'Art produced with Stable Diffusion prompt engineering',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Home;
