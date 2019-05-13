package testing.controller;

import com.kpi.testing.dto.TableDto;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController("table")
public class TableController {

    @RequestMapping(value = "{userId}", method= RequestMethod.GET)
    public @ResponseBody
    List<TableDto> getTableData(@PathVariable Long userId){
        return new ArrayList<>();
    }

}
