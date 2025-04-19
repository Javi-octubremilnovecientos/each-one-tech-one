
export const SetQuery = (topic) => {


    
        switch (topic) {
            case "App's & Software":
                return "Software OR app OR google OR microsoft";
            case "Smartphones":
                return "iphone OR samsung OR xiaomi OR huawei OR smartphones";
            case "Gadgets":
                return "gadget OR gadgets OR gadget review";
            case "A.I.":
                return 'ai OR "A.I." OR Artificial Intelligence';
            case "Politics & Regulation":
                return 'regulation OR law OR politics';
            case null:
                return null;
            default:
                return ""; // Default to an empty string
        }
    };



