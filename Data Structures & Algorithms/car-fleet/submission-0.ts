class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars = [];
        const stack = [];

        for (let i = 0; i < position.length; i++) {
            const car = {
                position: position[i],
                speed: speed[i],
            }

            cars.push(car);
        }

        cars.sort((a, b) => b.position - a.position);

        for (const car of cars) {
            const time = (target - car.position) / car.speed;

            if (stack.length > 0 && time <= stack[stack.length - 1]) {
                // car joins the current fleet, no need to do anything
            } else {
                stack.push(time);
            }
        }

        return stack.length;
    }
}
