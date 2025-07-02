import { Injectable } from "@angular/core";

// Service 1
@Injectable({ providedIn: 'root' })
export class ServiceOne {

    public getData(): String { return 'Service One'; }
}

// Service 2
@Injectable({ providedIn: 'root' })
export class ServiceTwo {

    public getData(): String { return 'Service Two'; }
}

// Service 3
@Injectable({ providedIn: 'root' })
export class ServiceThree {

    public getData(): String { return 'Service Three'; }
}
// Service 4
@Injectable({ providedIn: 'root' })
export class ServiceFour {

    public getData(): String { return 'Service Four'; }
}

// Service 5
@Injectable({ providedIn: 'root' })
export class ServiceFive {

    public getData(): String { return 'Service Five'; }
}




