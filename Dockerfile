# Use Node.js image as base
FROM node:14

# Set working directory
WORKDIR /app

# Copy application files to the working directory in the container
COPY . .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Run the server
CMD ["node", "server.js"]
