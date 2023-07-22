<template>
  <div class="dots">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>

  <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="9" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -7"
          result="goo"
        />
        <feBlend in2="goo" in="SourceGraphic" result="mix" />
      </filter>
    </defs>
  </svg>
</template>

<style>
.dots {
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  filter: url(#goo);
}

.dot {
  width: 0;
  height: 0;
  position: absolute;
  left: 0;
  top: 0;
}
.dot:before {
  content: '';
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fd3739;
  position: absolute;
  left: 50%;
  top: -55px;
  margin-left: -10px;
  margin-top: -10px;
}
@-webkit-keyframes dot-0 {
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(343.6363636364deg);
  }
}
@keyframes dot-0 {
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(343.6363636364deg);
  }
}
.dot:nth-child(1) {
  transform: rotate(0deg);
  -webkit-animation: dot-0 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
  animation: dot-0 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
}
@-webkit-keyframes dot-1 {
  0% {
    transform: rotate(212.7272727273deg);
  }
  100% {
    transform: rotate(540deg);
  }
}
@keyframes dot-1 {
  0% {
    transform: rotate(212.7272727273deg);
  }
  100% {
    transform: rotate(540deg);
  }
}
.dot:nth-child(2) {
  transform: rotate(32.7272727273deg);
  -webkit-animation: dot-1 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
  animation: dot-1 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
}
@-webkit-keyframes dot-2 {
  0% {
    transform: rotate(245.4545454545deg);
  }
  100% {
    transform: rotate(736.3636363636deg);
  }
}
@keyframes dot-2 {
  0% {
    transform: rotate(245.4545454545deg);
  }
  100% {
    transform: rotate(736.3636363636deg);
  }
}
.dot:nth-child(3) {
  transform: rotate(65.4545454545deg);
  -webkit-animation: dot-2 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
  animation: dot-2 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
}
@-webkit-keyframes dot-3 {
  0% {
    transform: rotate(278.1818181818deg);
  }
  100% {
    transform: rotate(932.7272727273deg);
  }
}
@keyframes dot-3 {
  0% {
    transform: rotate(278.1818181818deg);
  }
  100% {
    transform: rotate(932.7272727273deg);
  }
}
.dot:nth-child(4) {
  transform: rotate(98.1818181818deg);
  -webkit-animation: dot-3 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
  animation: dot-3 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
}
@-webkit-keyframes dot-4 {
  0% {
    transform: rotate(310.9090909091deg);
  }
  100% {
    transform: rotate(1129.0909090909deg);
  }
}
@keyframes dot-4 {
  0% {
    transform: rotate(310.9090909091deg);
  }
  100% {
    transform: rotate(1129.0909090909deg);
  }
}
.dot:nth-child(5) {
  transform: rotate(130.9090909091deg);
  -webkit-animation: dot-4 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
  animation: dot-4 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
}
@-webkit-keyframes dot-5 {
  0% {
    transform: rotate(343.6363636364deg);
  }
  100% {
    transform: rotate(1325.4545454545deg);
  }
}
@keyframes dot-5 {
  0% {
    transform: rotate(343.6363636364deg);
  }
  100% {
    transform: rotate(1325.4545454545deg);
  }
}
.dot:nth-child(6) {
  transform: rotate(163.6363636364deg);
  -webkit-animation: dot-5 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
  animation: dot-5 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
}
@-webkit-keyframes dot-6 {
  0% {
    transform: rotate(376.3636363636deg);
  }
  100% {
    transform: rotate(1521.8181818182deg);
  }
}
@keyframes dot-6 {
  0% {
    transform: rotate(376.3636363636deg);
  }
  100% {
    transform: rotate(1521.8181818182deg);
  }
}
.dot:nth-child(7) {
  transform: rotate(196.3636363636deg);
  -webkit-animation: dot-6 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
  animation: dot-6 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
}
@-webkit-keyframes dot-7 {
  0% {
    transform: rotate(409.0909090909deg);
  }
  100% {
    transform: rotate(1718.1818181818deg);
  }
}
@keyframes dot-7 {
  0% {
    transform: rotate(409.0909090909deg);
  }
  100% {
    transform: rotate(1718.1818181818deg);
  }
}
.dot:nth-child(8) {
  transform: rotate(229.0909090909deg);
  -webkit-animation: dot-7 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
  animation: dot-7 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
}
@-webkit-keyframes dot-8 {
  0% {
    transform: rotate(441.8181818182deg);
  }
  100% {
    transform: rotate(1914.5454545455deg);
  }
}
@keyframes dot-8 {
  0% {
    transform: rotate(441.8181818182deg);
  }
  100% {
    transform: rotate(1914.5454545455deg);
  }
}
.dot:nth-child(9) {
  transform: rotate(261.8181818182deg);
  -webkit-animation: dot-8 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
  animation: dot-8 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
}
@-webkit-keyframes dot-9 {
  0% {
    transform: rotate(474.5454545455deg);
  }
  100% {
    transform: rotate(2110.9090909091deg);
  }
}
@keyframes dot-9 {
  0% {
    transform: rotate(474.5454545455deg);
  }
  100% {
    transform: rotate(2110.9090909091deg);
  }
}
.dot:nth-child(10) {
  transform: rotate(294.5454545455deg);
  -webkit-animation: dot-9 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
  animation: dot-9 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
}
@-webkit-keyframes dot-10 {
  0% {
    transform: rotate(507.2727272727deg);
  }
  100% {
    transform: rotate(2307.2727272727deg);
  }
}
@keyframes dot-10 {
  0% {
    transform: rotate(507.2727272727deg);
  }
  100% {
    transform: rotate(2307.2727272727deg);
  }
}
.dot:nth-child(11) {
  transform: rotate(327.2727272727deg);
  -webkit-animation: dot-10 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
  animation: dot-10 5s cubic-bezier(0.3, 0, 0.7, 1) infinite;
}
</style>
