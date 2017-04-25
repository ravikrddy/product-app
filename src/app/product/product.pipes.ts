import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "byYear"
})
export class ByYearPipe implements PipeTransform {
    transform(products: any[], year: any) {
        console.log("transform byYear", year);

        if (!products)
            return;
        
        if (!year)
            return products;

        return products
                .filter (( product: any) => product.year == year);
    }
}