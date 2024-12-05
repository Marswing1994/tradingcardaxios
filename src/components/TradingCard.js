/** @format */
import { useEffect, useState } from "react";

const roundStyle = {
    border: '12px solid white',
    borderRadius: '5px',
};

const extraLength = {
    position: 'absolute',
    paddingBottom: '2900px',
};

const TradingCard = ({card}) => {

    const [audio] = useState(new Audio('/plink.mp3'));

    useEffect(() => {
      audio.preload = 'auto'; // Preload the audio
    }, [audio]);
  
    const start = () => {
      audio.play();
    };

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="trading_card m-5 w-1/6 h-auto hover:shadow-2xl shadow-gray-500/80">
            <button onClick={function(){ start(); handleOpenModal()}} style={roundStyle}><img src = {card.images.small}></img></button>

            {showModal && (
                <div className="modal-overlay w-screen h-screen z-50 bg-slate-500/80" style={extraLength} onClick={handleCloseModal}>

<>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-96 bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {card.name}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        Rarity: {card.rarity}
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        Release Date: {card.set.releaseDate}
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        Series: {card.set.series}
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        Average Sale Price: ${card.cardmarket.prices.averageSellPrice} USD
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>

                </div>
                
            )}
        </div >

        
    );
};

export default TradingCard;