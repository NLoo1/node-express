# Broken App Issues
- Added app.use(express.json()) to read JSON. JSON would not be parsed otherwise
- Instead of mapping developers and sending GET request in the same block, mapped developers to promises, then called Promise.all(). This removes the issue of HTTP headers being sent multiple times and throwing an error
- With the addition of .then, added .catch blocks to promises for further error handling.
- Installed express. App will not function otherwise
- Changed mapping variable name from d to username for clarity
- Added err to catch block to ensure functional try/catch
- Changed async functions to instead use .then blocks. Async function would not properly wait for response.