/* eslint-disable react/no-unknown-property */

export const AddRemoveButton = ({ removerPartidos, agregarPartidos }) => {
    return (
        <div className="flex items-center justify-center gap-x-4 mt-2">
        <div className="w-8 cursor-pointer" onClick={agregarPartidos}>
            <svg
            fill="none"
            className="hover:stroke-red-400 active:stroke-red-700"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
            </svg>
        </div>

        <div className="w-8 cursor-pointer" onClick={removerPartidos}>
            <svg
            fill="none"
            className="hover:stroke-red-400 active:stroke-red-700"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
            </svg>
        </div>
        </div>
    );
};
