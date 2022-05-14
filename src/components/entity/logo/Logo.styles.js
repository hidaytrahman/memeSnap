import styled from "styled-components";

export const LogoContainer = styled.section`
    display: flex;
	background: #000;
	min-height: 20vh;
	align-items: center;
	justify-content: center;


    .content {
        position: relative;
    }
    
    .content h2 {
        color: #fff;
        font-size: 8em;
        position: absolute;
        transform: translate(-50%, -50%);
    }
    
    .content h2:nth-child(1) {
        color: transparent;
        -webkit-text-stroke: 2px #03a9f4;
    }
    
    .content h2:nth-child(2) {
        color: #03a9f4;
        animation: animate 4s ease-in-out infinite;
    }
    
    @keyframes animate {
        0%,
        100% {
            clip-path: polygon(
                0% 45%,
                16% 44%,
                33% 50%,
                54% 60%,
                70% 61%,
                84% 59%,
                100% 52%,
                100% 100%,
                0% 100%
            );
        }
    
        50% {
            clip-path: polygon(
                0% 60%,
                15% 65%,
                34% 66%,
                51% 62%,
                67% 50%,
                84% 45%,
                100% 46%,
                100% 100%,
                0% 100%
            );
        }
    }
`