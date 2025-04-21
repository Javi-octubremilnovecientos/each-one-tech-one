
export const SetQuery = (topic) => {


    
        switch (topic) {
            case "App's & Software":
                return "Software OR software OR develop";
            case "Smartphones":
                return "iphone OR samsung galaxy OR xiaomi OR huawei OR smartphone";
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



