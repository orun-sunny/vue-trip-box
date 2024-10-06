# Use the official Node.js LTS image as the base image
FROM node:20-alpine

# Install the pnpm package manager
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the container
COPY package.json pnpm-lock.yaml ./

# Install project dependencies
RUN pnpm install

# Copy the rest of the application code to the container
COPY . .

# Build the Nuxt.js app for production
RUN pnpm build

# Expose the application port (default is 3000)
EXPOSE 3000

# Start the Nuxt.js app in production mode
CMD ["pnpm", "start"]
