# ================================
# Build image
# ================================
FROM node:lts-alpine

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# install project dependencies
RUN npm install

EXPOSE 8089

CMD ["npm", "run", "serve", "--port=8089"]
