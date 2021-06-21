import java.net.URL;
import java.util.ResourceBundle;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;

public class Controller {

    @FXML
    private ResourceBundle resources;

    @FXML
    private URL location;

    @FXML
    private Button button;

    @FXML
    private Label label_counter;

    int count = 0;
    @FXML
    private void onClick(ActionEvent event) {
        count++;
        label_counter.setText(String.valueOf(count));
    }

    @FXML
    void initialize() {

    }
}
