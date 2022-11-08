import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-content">
        <div className="copyright">
        © PrimeFlix 2020
        </div>
        <div className="icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.05273 0.072C8.33236 0.0130909 8.74036 0 12 0C15.2596 0 15.6676 0.0141818 16.9462 0.072C18.2247 0.129818 19.0975 0.333818 19.8611 0.629455C20.6607 0.931636 21.3862 1.404 21.9862 2.01491C22.5971 2.61382 23.0684 3.33818 23.3695 4.13891C23.6662 4.90255 23.8691 5.77527 23.928 7.05164C23.9869 8.33345 24 8.74145 24 12C24 15.2596 23.9858 15.6676 23.928 16.9473C23.8702 18.2236 23.6662 19.0964 23.3695 19.86C23.0684 20.6608 22.5963 21.3864 21.9862 21.9862C21.3862 22.5971 20.6607 23.0684 19.8611 23.3695C19.0975 23.6662 18.2247 23.8691 16.9484 23.928C15.6676 23.9869 15.2596 24 12 24C8.74036 24 8.33236 23.9858 7.05273 23.928C5.77636 23.8702 4.90364 23.6662 4.14 23.3695C3.33919 23.0683 2.61362 22.5963 2.01382 21.9862C1.40332 21.3869 0.930889 20.6617 0.629455 19.8611C0.333818 19.0975 0.130909 18.2247 0.072 16.9484C0.0130909 15.6665 0 15.2585 0 12C0 8.74036 0.0141818 8.33236 0.072 7.05382C0.129818 5.77527 0.333818 4.90255 0.629455 4.13891C0.931334 3.33827 1.40413 2.61307 2.01491 2.01382C2.61386 1.40346 3.3387 0.931029 4.13891 0.629455C4.90255 0.333818 5.77527 0.130909 7.05164 0.072H7.05273ZM16.8491 2.232C15.5836 2.17418 15.204 2.16218 12 2.16218C8.796 2.16218 8.41636 2.17418 7.15091 2.232C5.98036 2.28545 5.34545 2.48073 4.92218 2.64545C4.36255 2.86364 3.96218 3.12218 3.54218 3.54218C3.14405 3.92951 2.83765 4.40104 2.64545 4.92218C2.48073 5.34545 2.28545 5.98036 2.232 7.15091C2.17418 8.41636 2.16218 8.796 2.16218 12C2.16218 15.204 2.17418 15.5836 2.232 16.8491C2.28545 18.0196 2.48073 18.6545 2.64545 19.0778C2.83745 19.5982 3.144 20.0705 3.54218 20.4578C3.92945 20.856 4.40182 21.1625 4.92218 21.3545C5.34545 21.5193 5.98036 21.7145 7.15091 21.768C8.41636 21.8258 8.79491 21.8378 12 21.8378C15.2051 21.8378 15.5836 21.8258 16.8491 21.768C18.0196 21.7145 18.6545 21.5193 19.0778 21.3545C19.6375 21.1364 20.0378 20.8778 20.4578 20.4578C20.856 20.0705 21.1625 19.5982 21.3545 19.0778C21.5193 18.6545 21.7145 18.0196 21.768 16.8491C21.8258 15.5836 21.8378 15.204 21.8378 12C21.8378 8.796 21.8258 8.41636 21.768 7.15091C21.7145 5.98036 21.5193 5.34545 21.3545 4.92218C21.1364 4.36255 20.8778 3.96218 20.4578 3.54218C20.0705 3.14408 19.5989 2.83768 19.0778 2.64545C18.6545 2.48073 18.0196 2.28545 16.8491 2.232V2.232ZM10.4673 15.6993C11.3233 16.0556 12.2764 16.1037 13.1639 15.8353C14.0514 15.567 14.8182 14.9988 15.3334 14.2279C15.8485 13.457 16.0801 12.5311 15.9884 11.6085C15.8968 10.6858 15.4876 9.82361 14.8309 9.16909C14.4123 8.7507 13.9061 8.43034 13.3487 8.23107C12.7914 8.0318 12.1968 7.95858 11.6078 8.01667C11.0188 8.07477 10.45 8.26274 9.94233 8.56705C9.43468 8.87136 9.00081 9.28445 8.67197 9.77657C8.34312 10.2687 8.12748 10.8276 8.04056 11.413C7.95365 11.9985 7.99762 12.596 8.16932 13.1624C8.34101 13.7288 8.63616 14.2501 9.03351 14.6888C9.43087 15.1275 9.92054 15.4726 10.4673 15.6993ZM7.63855 7.63855C8.2113 7.06579 8.89126 6.61146 9.6396 6.30149C10.3879 5.99151 11.19 5.83197 12 5.83197C12.81 5.83197 13.6121 5.99151 14.3604 6.30148C15.1087 6.61146 15.7887 7.06579 16.3615 7.63855C16.9342 8.2113 17.3885 8.89126 17.6985 9.6396C18.0085 10.3879 18.168 11.19 18.168 12C18.168 12.81 18.0085 13.6121 17.6985 14.3604C17.3885 15.1087 16.9342 15.7887 16.3615 16.3615C15.2047 17.5182 13.6359 18.168 12 18.168C10.3641 18.168 8.79528 17.5182 7.63855 16.3615C6.48182 15.2047 5.83197 13.6359 5.83197 12C5.83197 10.3641 6.48182 8.79528 7.63855 7.63855V7.63855ZM19.536 6.75055C19.6779 6.61666 19.7916 6.45565 19.8702 6.27706C19.9487 6.09847 19.9907 5.90593 19.9935 5.71083C19.9964 5.51574 19.9601 5.32205 19.8867 5.14125C19.8134 4.96044 19.7045 4.79619 19.5665 4.65822C19.4285 4.52026 19.2643 4.41137 19.0835 4.33802C18.9027 4.26467 18.709 4.22834 18.5139 4.23118C18.3188 4.23403 18.1263 4.27599 17.9477 4.35458C17.7691 4.43317 17.6081 4.5468 17.4742 4.68873C17.2138 4.96476 17.0712 5.33141 17.0768 5.71083C17.0823 6.09026 17.2355 6.4526 17.5038 6.72092C17.7721 6.98924 18.1345 7.14243 18.5139 7.14796C18.8933 7.15349 19.26 7.01093 19.536 6.75055V6.75055Z" fill="white"/>
            </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.415 14.382C17.117 14.233 15.656 13.515 15.384 13.415C15.112 13.316 14.914 13.267 14.715 13.565C14.517 13.861 13.948 14.531 13.775 14.729C13.601 14.928 13.428 14.952 13.131 14.804C12.834 14.654 11.876 14.341 10.741 13.329C9.85798 12.541 9.26098 11.568 9.08799 11.27C8.91499 10.973 9.06899 10.812 9.21799 10.664C9.35198 10.531 9.51498 10.317 9.66398 10.144C9.81298 9.97002 9.86198 9.84602 9.96098 9.64703C10.061 9.44903 10.011 9.27603 9.93598 9.12703C9.86198 8.97803 9.26798 7.51503 9.01999 6.92003C8.77899 6.34103 8.53399 6.42003 8.35199 6.41003C8.17799 6.40203 7.97999 6.40003 7.78199 6.40003C7.58399 6.40003 7.26199 6.47403 6.98999 6.77203C6.71699 7.06903 5.94999 7.78803 5.94999 9.25103C5.94999 10.713 7.01399 12.126 7.16299 12.325C7.31199 12.523 9.25798 15.525 12.239 16.812C12.949 17.118 13.502 17.301 13.933 17.437C14.645 17.664 15.293 17.632 15.805 17.555C16.375 17.47 17.563 16.836 17.811 16.142C18.058 15.448 18.058 14.853 17.984 14.729C17.91 14.605 17.712 14.531 17.414 14.382H17.415ZM11.993 21.785H11.989C10.2184 21.7853 8.48036 21.3094 6.95699 20.407L6.59699 20.193L2.855 21.175L3.85399 17.527L3.61899 17.153C2.62913 15.5774 2.10529 13.7538 2.108 11.893C2.11 6.44303 6.54399 2.00904 11.997 2.00904C14.637 2.00904 17.119 3.03904 18.985 4.90703C19.9053 5.82361 20.6348 6.9136 21.1312 8.11392C21.6276 9.31425 21.8811 10.6011 21.877 11.9C21.875 17.35 17.441 21.785 11.993 21.785V21.785ZM20.405 3.48804C19.3032 2.37896 17.9922 1.49958 16.5481 0.90084C15.1039 0.302104 13.5553 -0.00407624 11.992 4.09775e-05C5.43799 4.09775e-05 0.102 5.33503 0.0999998 11.892C0.0969629 13.9788 0.644373 16.0294 1.687 17.837L0 24L6.30399 22.346C8.04786 23.2961 10.0021 23.794 11.988 23.794H11.993C18.547 23.794 23.883 18.459 23.885 11.901C23.8898 10.3383 23.5847 8.79013 22.9874 7.34606C22.3901 5.902 21.5123 4.5907 20.405 3.48804" fill="white"/>
            </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V16.5C0 16.8978 0.158035 17.2794 0.43934 17.5607C0.720644 17.842 1.10218 18 1.5 18H22.5C22.8978 18 23.2794 17.842 23.5607 17.5607C23.842 17.2794 24 16.8978 24 16.5V1.5C24 1.10218 23.842 0.720644 23.5607 0.43934C23.2794 0.158035 22.8978 0 22.5 0V0ZM21.345 16.5H2.745L7.995 11.07L6.915 10.0275L1.5 15.63V2.64L10.8225 11.9175C11.1035 12.1969 11.4837 12.3537 11.88 12.3537C12.2763 12.3537 12.6565 12.1969 12.9375 11.9175L22.5 2.4075V15.5325L16.98 10.0125L15.9225 11.07L21.345 16.5ZM2.4825 1.5H21.285L11.88 10.8525L2.4825 1.5Z" fill="white"/>
            </svg>
            </a>
        </div>
        </div>
    </div>
  )
}

export default Footer