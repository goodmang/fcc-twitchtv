export class Channel {

    constructor(
        public name: string, 
        public imagePath: string, 
        public onlineStatus: boolean,
        public description: string,
        public link: string
    ) {}
}