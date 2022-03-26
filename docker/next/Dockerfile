FROM node:16.14.0
USER root

WORKDIR /next

RUN apt-get update && apt-get install -y \
  locales &&\
  localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE jaJP:ja
ENV LC_ALL ja_JP.UTF-8
ENV TZ JST-9
ENV TERM xterm

RUN apt-get install -y vim less
RUN yarn install