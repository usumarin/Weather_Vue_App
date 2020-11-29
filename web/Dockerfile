FROM node:14.15.1

WORKDIR /app

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

RUN apt-get update -y && \
    apt-get upgrade -y && \
    yarn global add @vue/cli@4.5.9

ADD . /app