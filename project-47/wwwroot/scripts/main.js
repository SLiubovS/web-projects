async function getUsers(names) {

    let array = []; // создали пустой массив

    for (let name in names) {

        let arr = fetch(`https://api.github.com/users/${name}`).then(
            successResponse => {
                if (successResponse.status !== 200) {
                    return null;
                } else {
                    return successResponse.json();
                }
            },
            failResponse => {
                return null;
            }
        );
        array.push(arr);
    }
    let result = await Promise.all(array);

    console.log(`arr: ${arr}, array: ${array}, result: ${result}`);

    return result;
}

getUsers(`https://api.github.com/users/SLiubovS`);
getUsers(`https://api.github.com/users/solov-da`);
