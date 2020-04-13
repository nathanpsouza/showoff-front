FROM node:13.12.0
WORKDIR /app
COPY . /app/.
RUN yarn
EXPOSE 3000
CMD ["yarn", "start"]