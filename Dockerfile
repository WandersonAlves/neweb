FROM centos:centos6
RUN yum install -y epel-release
RUN yum install -y nodejs npm
COPY public/ /src/public
COPY server.js /src/server.js
COPY package.json /src/package.json
RUN cd /src; npm install
EXPOSE 8080
CMD ["node", "/src/server.js"]

