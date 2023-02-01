FROM node:16

FROM mcr.microsoft.com/playwright:focal

WORKDIR /main

COPY package.json /main/
COPY tests/ /main/tests/
COPY src/ /main/src/

RUN apt-get update && apt-get -y install libnss3 libatk-bridge2.0-0 libdrm-dev libxkbcommon-dev libgbm-dev libasound-dev libatspi2.0-0 libxshmfence-dev

RUN npm install

