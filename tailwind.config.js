import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'brandGradiant': 'linear-gradient(to right, #FE572E, #FC3A79)',
      },
      fontFamily: {
        'sans': ['Alef', 'sans-serif'],
      },
      fontSize: {
        'deskH1': '100px', 
        'deskH2': '84px', 
        'deskH3': '59px', 
        'deskH4': '32px', 
        'deskH5': '30px', 
        'deskH6': '15px', 
        'paraH1': '21px',

        'phoneH1': '50px', 
        'phoneH2': '39px', 
        'phoneH3': '30px', 
        'phoneH4': '23px', 
        'phoneH5': '19px', 
        'phoneH6': '12px', 
        'phonePara': '18px', 


        'tabH1': '102px', 
        'tabH2': '72px', 
        'tabH3': '51px', 
        'tabH4': '36px', 
        'tabH5': '25px', 
        'tabH6': '18px', 
        'paraTab': '18px', 
      },
      letterSpacing: {
        'deskH1': '-3%', 
        'deskH3': '-3%%',

        'phoneH1': '-3%',
        'phoneH2': '44px', 
        'phoneH3': '-3%', 

        'tabH1': '-3%', 
        'tabH3': '-3%', 
        'tabH6': '18px', 
      },
      lineHeight: {
        'deskH1': '144px', 
        'deskH2': '112px', 
        'deskH3': '72px', 
        'deskH4': '48px', 
        'deskH5': '40px', 
        'deskH6': '30px', 
        'paraH1': '30px',

        'phoneH1': '79px', 
        'phoneH2': '56px', 
        'phoneH3': '48px', 
        'phoneH4': '40px', 
        'phoneH5': '28px', 
        'phoneH6': '24px', 
        'phonePara': '26px', 

        'tabH1': '132px', 
        'tabH2': '100px', 
        'tabH3': '72px', 
        'tabH4': '48px', 
        'tabH5': '32px', 
        'tabH6': '24px', 
        'paraTab': '26px', 
      },
      fontWeight: {
        'deskH1': 'bold', 
        'deskH2': 'bold', 
        'deskH3': 'bold', 
        'deskH6': 'bold', 

        'phoneH1': 'bold', 
        'phoneH2': 'bold', 
        'phoneH3': 'bold', 

        'tabH1': 'bold', 
        'tabH2': 'bold', 
        'tabH3': 'bold', 
      },
      colors:{
        primary: {
          DEFAULT: '#FC3A79',
        },
        secondary: {
          DEFAULT: '#FE572E',
        },
        eroor: {
          DEFAULT: '#E63329'
        },
        brandGradiant:{
          DEFAULT: 'linear-gradient(to right, #FE572E, #FC3A79)'
        },
        black: {
          DEFAULT: '#261F22',
          50: 'rgba(38, 31, 34, 0.5)',   // Opacité 50%
          75: 'rgba(38, 31, 34, 0.75)',  // Opacité 75%
          25: 'rgba(38, 31, 34, 0.25)',  // Opacité 25%
          10: 'rgba(38, 31, 34, 0.1)',   // Opacité 10%
          5: 'rgba(38, 31, 34, 0.05)',  
        },
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '250px',
        },
      },
    },
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
  ],
}