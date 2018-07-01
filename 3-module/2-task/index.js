let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
    let current = new Date(this.from).getTime();
    let last = new Date(this.to).getTime();
    const day = 1000 * 60 * 60 * 24;
    let dateArr = [];
    let counter = 0;
    return {
        next() {
            if (current <= last) {
                current = current + day;
                counter++;
                if(new Date(current).getDay() === 6 || new Date(current).getDay() === 0)
                {
                    dateArr.push(`[${("0" + new Date(current).getDate()).slice(-2)}]`);
                } else {
                    dateArr.push(`${("0" + new Date(current).getDate()).slice(-2)}`);
                }
                return {
                    done: false,
                    value: dateArr[counter - 1]
                };
            } else {
                return {
                    value: dateArr,
                    done: true
                };
            }
        }
    }
};


