async function getLion() {
    return "lion";
}

async function main() {
    const lion =  await getLion();
    console.log(lion === "lion");
    console.log(lion)
}

main();
