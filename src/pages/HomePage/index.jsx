import { Card } from '../../components/Card';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <Card type="blue" title="Modrá" img="../favicon.ico" imgPosition={"top"} paticka="Knedlenka.cz">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem suscipit nemo id sequi vel quam molestias dolorum laboriosam. Quisquam, explicabo?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cumque quas nemo, veritatis provident laudantium, consectetur doloremque tenetur inventore atque soluta officiis incidunt voluptatibus placeat aperiam minus. Excepturi saepe aliquam libero molestiae, expedita, veritatis voluptatibus, voluptates maxime quidem itaque ipsam optio ex fuga fugiat modi sunt cupiditate repellat animi! Incidunt?</p>
      </Card>

      <Card type="red" title="Červená" img="../favicon.ico" imgPosition={"down"} paticka="Knedlenka.cz">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cumque quas nemo, veritatis provident laudantium, consectetur doloremque tenetur inventore atque soluta officiis incidunt voluptatibus placeat aperiam minus. Excepturi saepe aliquam libero molestiae, expedita, veritatis voluptatibus, voluptates maxime quidem itaque ipsam optio ex fuga fugiat modi sunt cupiditate repellat animi! Incidunt?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem suscipit nemo id sequi vel quam molestias dolorum laboriosam. Quisquam, explicabo?</p>

      </Card>

      <Card type="green" title="Zelená" img="../favicon.ico" imgPosition={"middle"} paticka="Knedlenka.cz">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem suscipit nemo id sequi vel quam molestias dolorum laboriosam. Quisquam, explicabo?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cumque quas nemo, veritatis provident laudantium, consectetur doloremque tenetur inventore atque soluta officiis incidunt voluptatibus placeat aperiam minus. Excepturi saepe aliquam libero molestiae, expedita, veritatis voluptatibus, voluptates maxime quidem itaque ipsam optio ex fuga fugiat modi sunt cupiditate repellat animi! Incidunt?</p>
      </Card>
    </div>
  );
};
