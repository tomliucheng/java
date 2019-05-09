@Id
@GeneratedValue(strategy=GenerationType.AUTO)
//JPA will recognize it as the object’s ID
//indicate that the ID should be generated automatically

@Entity
//indicate this is a JAP entity

@SpringBootApplication
//is a convenience annotation that adds all of the following

@Configuration // tags the class as a source of bean definitions for the application context.
@EnableAutoConfiguration 
//tells Spring Boot to start adding beans based on classpath settings, other beans, and various property settings.
@ComponentScan 
//tells Spring to look for other components, configurations, and services in the hello package, allowing it to find the controllers.

//springboot配置文件：application.properties or application.yml

@Value("${host-name}") //获取配置文件中的参数